import "./EditProfile.css";
import Icon from "../ui/Icon";
import Spinner from "./Spinner";


function EditProfile({visible,onModalClose}) {
          const formErrors =""
          const HandleFormSubmit=()=>{}
          const handleChange = (e)=>{}
        
          return (
          <div className={visible?"modal-container":"modal-container modal-container-not-visible"
          }>
            <div className="overlay"></div>
            <Icon iconName="close" extra="close-modal-btn" onIconClick={onModalClose}/>
            <div className="edit-profile-modal">
              
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum laboriosam perferendis culpa necessitatibus expedita? Cupiditate sed provident excepturi ratione?</p>
                  <div className="edit-profile ">
                    <div className="auth-container ">
                          {formErrors.error && <small className="form-detail-error">{formErrors.error}</small>}
                          {formErrors.info && <small className="form-detail-error">{formErrors.info}</small>}
                          <form method="post" onSubmit={HandleFormSubmit}>
                            <div className="input-group">
                                  <Icon iconName={"user"} extra={"input-icon"} />
                                  <input
                                    type="text"
                                    maxLength={20}
                                    placeholder="first name"
                                    name="first_name"
                                    onChange={handleChange}
                                  />{formErrors.first_name && <small className="form-error">{formErrors.first_name}</small>}
                            </div>
                            <div className="input-group">
                              <Icon iconName={"user"} extra={"input-icon"} />
                                  <input
                                    type="text"
                                    maxLength={20}
                                    placeholder="last name"
                                    name="last_name"
                                    onChange={handleChange}
                                  />{formErrors.last_name && <small className="form-error">{formErrors.last_name}</small>}
                            </div>
                            <div className="input-group">
                                  <Icon iconName={"envelope"} extra={"input-icon"} />
                                  <input type="email"
                                    placeholder="email"
                                    name="email" 
                                    onChange={handleChange}
                                    />
                                  {formErrors.email && <small className="form-error">{formErrors.email}</small>}

                            </div>
                            <div className="input-group">
                                  <Icon iconName={"phone"} extra={"input-icon"} />
                                  <input type="phone"
                                    placeholder="phone"
                                    name="phone_number" 
                                    onChange={handleChange}
                                    />
                                  {formErrors.phone_number && <small className="form-error">{formErrors.phone_number}</small>}

                            </div>
                            <div className="input-group">
                                    <Icon iconName={"lock"} extra={"input-icon"} />
                                    <input type="password"
                                      placeholder="password"
                                      name="password" 
                                      onChange={handleChange}
                                      />
                                    {formErrors.password && <small className="form-error">{formErrors.password}</small>}

                            </div>

                            <div className="input-group">
                                    <Icon iconName={"lock"} extra={"input-icon"} />
                                    <input type="address"
                                      placeholder="address"
                                      name="address" 
                                      onChange={handleChange}
                                      />
                              {formErrors.address && <small className="form-error">{formErrors.address}</small>}

                            </div>
                            <button type="submit">Save changes <Spinner/></button>
                          </form>
                    </div>
            </div>
            </div>
          </div>
          )
}

export default EditProfile