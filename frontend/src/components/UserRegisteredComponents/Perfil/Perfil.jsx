import "./profile.css";
import LeftMenu from "../LeftMenu/LeftMenu";
export default function Perfil() {
  return (
    <>
      <div>
        <LeftMenu />
      </div>
      <div className='container-left-n-right'>
        <div className='right-section' style={{ marginLeft: "500px" }}>
          <figure className='snip1336'>
            <img
              src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg'
              alt='sample87'
            />
            <figcaption>
              <img
                src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample4.jpg'
                alt='profile-sample4'
                className='profile'
              />
              <h2>
                Hans Down<span>Engineer</span>
              </h2>
              <p>
                Im looking for something that can deliver a 50-pound payload of
                snow on a small feminine target. Can you suggest something?
                Hello...?{" "}
              </p>
              <a href='#' className='follow'>
                Follow
              </a>
              <a href='#' className='info'>
                More Info
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}
