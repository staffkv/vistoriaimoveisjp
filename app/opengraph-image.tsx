import { ImageResponse } from 'next/og';

export const alt = 'Vistoria de Imóveis JP — vistoria técnica em João Pessoa';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#eaf0ed',
          color: '#202b30',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          padding: '80px',
          width: '100%',
        }}
      >
        <div
          style={{
            color: '#24574e',
            fontSize: 30,
            fontWeight: 600,
            letterSpacing: '-0.04em',
            marginBottom: 42,
          }}
        >
          Vistoria de Imóveis JP
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 600,
            letterSpacing: '-0.06em',
            lineHeight: 1.05,
            maxWidth: 920,
            textAlign: 'center',
          }}
        >
          Receba seu imóvel novo com mais segurança.
        </div>
        <div
          style={{
            color: '#5b686c',
            fontSize: 30,
            marginTop: 42,
          }}
        >
          Vistoria técnica em João Pessoa e região
        </div>
      </div>
    ),
    size,
  );
}
