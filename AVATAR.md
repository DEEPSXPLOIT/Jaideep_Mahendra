# Personalized avatar

## Asset

`public/avatar/jaideep-sunglasses-v1.png` is a six-frame, transparent 3-column × 2-row sprite sheet created using the built-in image-generation tool with the supplied photo as an identity reference. The original photo is not copied into the public site.

## Animation

`src/components/InteractiveAvatar.js` displays frames 0–5 to put on sunglasses and reverses them to remove sunglasses. The interaction supports keyboard and touch, provides accessible labels and status, cancels timers on unmount, and shows the static endpoint when reduced motion is requested. Mouse movement adds a subtle CSS perspective tilt. This is a 3D-style rendered sprite animation rather than a rigged mesh.

## Generation prompt

Use case: stylized-concept / identity-preserve. Create a regular six-frame 3-column × 2-row transparent sprite sheet. Use the supplied portrait as the identity reference, matching medium brown skin, thick swept black hair, dark eyes, face proportions, trimmed full beard and moustache. Render a polished 3D-style waist-up character in a black blazer and peach T-shirt, with a friendly confident smile. Keep framing, lighting, scale, and face position fixed. Sequence: sunglasses held low; raised to chest; raised below eyes; slid onto nose; hand releases temple; arm lowers with sunglasses worn. Use identical glossy black wayfarer glasses throughout. Include no text, separators, watermark, or scenery. Soft studio light with subtle cool rim highlights. Preserve genuine alpha transparency.
