import React from 'react';

export const BackgroundVideo: React.FC = () => {
  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden bg-white"
      aria-hidden="true"
    >
      {/* Soft light cyan & sky blue ambient light glows for White Theme */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-cyan-100/60 blur-[130px]" />
      <div className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-sky-100/50 blur-[150px]" />
      <div className="absolute -bottom-[15%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-cyan-50/70 blur-[120px]" />

      {/* Subtle fine mesh pattern */}
      <div className="absolute inset-0 opacity-[0.035] z-10 bg-[radial-gradient(#009fe1_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
};



