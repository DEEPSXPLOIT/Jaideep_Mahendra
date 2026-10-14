 'use client';
import {useEffect,useRef,useState} from 'react';
import Image from 'next/image';
import styled,{keyframes} from 'styled-components';
import {FiRefreshCw} from 'react-icons/fi';
import {useLanguage} from '@/context/LanguageContext';

const SHEET='/avatar/jaideep-sunglasses-v1.png';
const float=keyframes`0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}`;
const Wrap=styled.div`height:100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;perspective:900px;`;
const Stage=styled.div`
  position:relative;height:calc(100% - 74px);aspect-ratio:1;max-width:100%;
  transform-style:preserve-3d;transition:transform .35s ease;will-change:transform;
  @media(prefers-reduced-motion:reduce){transition:none;transform:none!important;}
`;
const Float=styled.div`
  position:absolute;inset:0;animation:${float} 5s ease-in-out infinite;
  @media(prefers-reduced-motion:reduce){animation:none;}
`;
const Sprite=styled.div`
  position:absolute;inset:0;background-image:url('${SHEET}');background-size:300% 200%;background-repeat:no-repeat;
  background-position:${({$frame})=>`${($frame%3)*50}% ${Math.floor($frame/3)*100}%`};
  filter:drop-shadow(0 8px 20px rgba(99,102,241,.14));
`;
const Controls=styled.div`
  display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;
  button{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:11px 15px;border-radius:100px;border:1px solid ${({theme})=>theme.colors.border};background:${({theme})=>theme.colors.navBg};color:${({theme})=>theme.colors.text};font-size:.78rem;transition:background .2s,border-color .2s;}
  button:hover{border-color:${({theme})=>theme.colors.accentDark};background:${({theme})=>theme.colors.bgSecondary};}
  button:disabled{opacity:.55;cursor:default;}
  button[aria-pressed="true"]{border-color:${({theme})=>theme.colors.accentDark};}
`;
const Status=styled.span`font-size:.7rem;color:${({theme})=>theme.colors.textMuted};`;
export default function InteractiveAvatar(){
  const {t}=useLanguage();
  const [ready,setReady]=useState(false);
  const [frame,setFrame]=useState(0);
  const [wearing,setWearing]=useState(false);
  const [busy,setBusy]=useState(false);
  const [reduced,setReduced]=useState(false);
  const [tilt,setTilt]=useState({x:0,y:0});
  const timer=useRef(null);
  const target=useRef(false);
  const lock=useRef(false);
  useEffect(()=>{
    const image=new window.Image();image.onload=()=>setReady(true);image.src=SHEET;
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const update=()=>{setReduced(media.matches);if(media.matches){clearTimeout(timer.current);setFrame(target.current?5:0);setWearing(target.current);setBusy(false);lock.current=false;setTilt({x:0,y:0});}};
    update();media.addEventListener('change',update);
    return()=>{image.onload=null;clearTimeout(timer.current);media.removeEventListener('change',update);};
  },[]);
  function play(next,replay=false){
    if(!ready||lock.current)return;
    target.current=next;
    if(reduced){setFrame(next?5:0);setWearing(next);return;}
    lock.current=true;setBusy(true);
    // The same motion runs forward to put on glasses and backward to remove them.
    const sequence=next?[0,1,2,3,4,5]:[5,4,3,2,1,0];
    if(replay&&next===wearing)setFrame(next?0:5);
    let step=0;
    const advance=()=>{
      setFrame(sequence[step]);
      if(step===sequence.length-1){setWearing(next);setBusy(false);lock.current=false;timer.current=null;return;}
      step++;timer.current=setTimeout(advance,190);
    };
    advance();
  }
  function move(event){if(reduced||event.pointerType!=='mouse')return;const rect=event.currentTarget.getBoundingClientRect();setTilt({x:((event.clientY-rect.top)/rect.height-.5)*-7,y:((event.clientX-rect.left)/rect.width-.5)*9});}
  return <Wrap>
    <Stage style={{transform:`rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}} onPointerMove={move} onPointerLeave={()=>setTilt({x:0,y:0})}>
      <Float>{ready?<Sprite role="img" aria-label={t(wearing?'avatar.altOn':'avatar.altOff')} $frame={frame} data-frame={frame} data-state={wearing?'on':'off'}/>:<Image src="/avatar/idle/frame_001.webp" alt={t('avatar.altOff')} fill sizes="(max-width:800px) 300px, 420px" style={{objectFit:'contain'}}/>}</Float>
    </Stage>
    <Controls><button type="button" disabled={!ready||busy} aria-pressed={wearing} onClick={()=>play(!wearing)}>{t(busy?'avatar.changing':wearing?'avatar.remove':'avatar.putOn')}</button><button type="button" disabled={!ready||busy||reduced} aria-label={t('avatar.replay')} title={t('avatar.replay')} onClick={()=>play(wearing,true)}><FiRefreshCw aria-hidden="true"/></button></Controls>
    <Status role="status" aria-live="polite">{ready?t(busy?'avatar.changing':wearing?'avatar.on':'avatar.off'):t('avatar.loading')}</Status>
  </Wrap>;
}
