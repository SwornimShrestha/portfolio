const Footer = () => {
  return (
    <section className="w-full h-10 text-center  ">
      <div className="flex flex-row gap-4 justify-center items-center">
        Created with{" "}
        <img
          className="w-4 h-4 animate-spin"
          src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
          alt=""
        />
        <img
          className="w-4 h-4 animate-spin"
          src="https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
          alt=""
        />
        <span>
          {" "}
          by <span>Swornim</span>
        </span>
      </div>
    </section>
  );
};

export default Footer;
