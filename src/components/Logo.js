'use client';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Monogram = styled.div`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts?.heading || 'sans-serif'};
  font-weight: 900;
  font-size: 1.25rem;
  color: #ffffff;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.accent}40;
`;

const Name = styled.div`
  font-family: ${({ theme }) => theme.fonts?.heading || 'sans-serif'};
  font-weight: 800;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  letter-spacing: -0.5px;
  
  span {
    color: ${({ theme }) => theme.colors.accent};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Logo({ className }) {
    return (
        <LogoContainer className={className}>
            <Monogram>JM</Monogram>
            <Name>JAIDEEP<span>.</span></Name>
        </LogoContainer>
    );
}
