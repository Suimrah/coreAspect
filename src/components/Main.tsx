import nightSky from '../assets/night-sky.avif';

function Main() {
  return (
    <div className="grid justify-items-center">
      <div className="text-2xl font-bold text-center">Welcome to Core-Aspect</div>
      <img src={nightSky} alt="Night Sky" className="w-1/3 rounded-2xl" />
      <div>Coming Soon!</div>
    </div>
  );
}

export default Main;
