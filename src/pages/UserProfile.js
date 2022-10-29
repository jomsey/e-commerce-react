import "./UserProfile.css";
import ListItem from "../ui/ListItem";
import TopBar from "../components/TopBar";

export default function UserProfile() {
  return (
    <>
    <TopBar showToggler={true}/>
    <section className="profile-container">
      <aside>
        <div className="avatar">
          <img
            src="https://i.pcmag.com/imagery/articles/0618BTBt5ZLG4DHKsoHFMex-1..v1657185098.jpg"
            alt=""
          />
        </div>
        <div className="cluster">
          <div className="user-info">
            <h2 className="username">Jomsey</h2>
            <div className="info-cluster">
              <h3>Address</h3>
              <span>Kampala , Uganda </span>
            </div>

            <div className="info-cluster">
              <h3>Contacts</h3>
              <span>Kampala , Uganda</span>
            </div>
          </div>
          <div className="more">
            <ListItem text="Edit profile" icon="pen-to-square" />
            <ListItem text="Logout" icon="arrow-right-from-bracket" />
          </div>
        </div>
      </aside>
      <main>
        <div className="general-view">
          <div className="view-navs">
            <div className="nav">Orders</div>
            <div className="nav">Saved Items</div>
          </div>
        </div>
      </main>
    </section>
    </>
  );
}
