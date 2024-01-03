import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Logo.css'

interface LogoProps {
    title: string;
}

function Logo({title}: LogoProps) {
  return (
    <>
        <div className="d-flex justify-content-center">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-center">{title}</h1>
    </>
  );
}

export default Logo
