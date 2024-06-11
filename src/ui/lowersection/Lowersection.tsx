import "../lowersection/Lowersection.css"; // Ensure the path is correct

const url =
  "https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-indian-man-png-image_10149659.png";

function Lowersection() {
  return (
    <div className="lowerdivmain">
      <img src={url} height={340} width={370} alt="image" />

      <p className="p1p1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        molestiae, cumque modi reprehenderit laborum distinctio dolorem
        exercitationem nihil, voluptates esse tenetur in ducimus sapiente
        tempora. Aut distinctio beatae alias ex! !
      </p>
    </div>
  );
}

export default Lowersection;
