const BackgroundImage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40"></div>
      <video
        src={require("/public/assets/videos/paper-planes.mp4")}
        className="bg-cover absolute top-0 bg-no-repeat w-screen h-screen -z-50 object-cover"
        autoPlay
        loop
        muted
      />
    </>
  );
};

export default BackgroundImage;
