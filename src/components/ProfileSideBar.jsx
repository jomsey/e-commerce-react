
const ProfileSideBar = () => {
    return (
        <aside>
          <div className="avatar">
            <img
              src="https://i.pcmag.com/imagery/articles/0618BTBt5ZLG4DHKsoHFMex-1..v1657185098.jpg"
              alt=""
            />
          </div>
          <div className="cluster">
            <div className="user-info">
              <div className="info-cluster">
                <h4>First Name</h4>
                <small>Muwanguzi</small>
              </div>
              <div className="info-cluster">
                <h4>Last Name</h4>
                <small> Joseph</small>
              </div>
              <div className="info-cluster">
                <h4>Address</h4>
                <small> Kampala , Uganda</small>
              </div>

              <div className="info-cluster">
                <h4>Phone</h4>
                <small> 0754608152</small>
              </div>

              <div className="info-cluster">
                <h4>Email</h4>
                <small>muwanguzijoseph75@gmail.com</small>
              </div>
            </div>
            
          </div>
        </aside>
    );
}

export default ProfileSideBar;
