import axios from "axios";
import "./EditProfile.css";
import Icon from "../ui/Icon";
import Spinner from "./Spinner";
import {apiEndPoint} from "../config.json"
import { useContext,useState,useEffect} from "react";
import useToken from "../customHooks/useToken";
import { ProfileContext } from "../shop-context/useProfileState";
import CheckMark from "./CheckMark";


function EditProfile({visible,onModalClose}) {
          const {token} = useToken()
          const [saving,setSaving] = useState(false)
          const [formData,setFormData] = useState({})
          const [formErrors,setFormErrors] = useState({})
          const [savingDone,setSavingDone] = useState(false)
          const {profile,setUserProfile,userId} = useContext(ProfileContext)
          const [checkMarkVisible,setCheckMarkVisible] = useState(false)
          const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});

          const HandleFormSubmit=async(e)=>{
               e.preventDefault()
               setSaving(true)
               try {
                    const response = await instance.patch(`${apiEndPoint}/user/${userId}/`,formData)
                    setFormData({})
                    setUserProfile(response.data)
                    setFormErrors({})//clear previous for errors
                    setSaving(false)
                    setSavingDone(true)
                    setCheckMarkVisible(true)
                
               } catch (error) {
                    error.response && setFormErrors(error.response.data)
                    setSaving(false)
                    setSavingDone(false)
               }
          }


          const handleChange = (e)=>{
                const name = e.target.name;
                const value = e.target.value;
                setFormData(formData=>({...formData,[name]:value}))
          }

          
          useEffect(()=>{
            setTimeout(()=>setCheckMarkVisible(false),6000)
          },[checkMarkVisible])
        

          return (
          <div className={visible?"modal-container":"modal-container modal-container-not-visible"
          }>
            <div className="overlay"></div>
            <Icon iconName="close" extra="close-modal-btn" onIconClick={onModalClose}/>
            <div className="edit-profile-modal">
                   <CheckMark visible={checkMarkVisible} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum laboriosam perferendis culpa necessitatibus expedita? Cupiditate sed provident excepturi ratione?</p>
                  <div className="edit-profile ">
                    <div className="auth-container ">
                          {savingDone && <span className="save-success">SUCCESSFULLY SAVED</span> }
                          {formErrors.error && <small className="form-detail-error">{formErrors.error}</small>}
                          {formErrors.info && <small className="form-detail-error">{formErrors.info}</small>}
                          <form method="post" onSubmit={HandleFormSubmit} noValidate>
                            <div className="input-group">
                                  <Icon iconName={"user"} extra={"input-icon"} />
                                  <input
                                    type="text"
                                    maxLength={20}
                                    placeholder={profile.first_name || "first name"}
                                    name="first_name"
                                    onChange={handleChange}
                                  />{formErrors.first_name && <small className="form-error">{formErrors.first_name}</small>}
                            </div>
                            <div className="input-group">
                              <Icon iconName={"user"} extra={"input-icon"} />
                                  <input
                                    type="text"
                                    maxLength={20}
                                    placeholder={profile.last_name || "last name"}
                                    name="last_name"
                                    onChange={handleChange}
                                  />{formErrors.last_name && <small className="form-error">{formErrors.last_name}</small>}
                            </div>
                            <div className="input-group">
                                  <Icon iconName={"envelope"} extra={"input-icon"} />
                                  <input type="email"
                                    placeholder={profile.email || "email"}
                                    name="email" 
                                    onChange={handleChange}
                                    />
                                  {formErrors.email && <small className="form-error">{formErrors.email}</small>}

                            </div>
                            <div className="input-group">
                                  <Icon iconName={"phone"} extra={"input-icon"} />
                                  <input type="phone"
                                    placeholder={profile.phone_number || "phone"}
                                    name="phone_number" 
                                    onChange={handleChange}
                                    />
                                  {formErrors.phone_number && <small className="form-error">{formErrors.phone_number}</small>}

                            </div>
                            <div className="input-group">
                                    <Icon iconName={"lock"} extra={"input-icon"} />
                                    <input type="password"
                                      placeholder={profile.password || "password"}
                                      name="password" 
                                      onChange={handleChange}
                                      />
                                    {formErrors.password && <small className="form-error">{formErrors.password}</small>}

                            </div>

                            <div className="input-group">
                                    <Icon iconName={"lock"} extra={"input-icon"} />
                                    <input type="address"
                                      placeholder= {profile.address || "address"} 
                                      name="address" 
                                      onChange={handleChange}
                                      />
                              {formErrors.address && <small className="form-error">{formErrors.address}</small>}

                            </div>
                            <button type="submit">{saving?<>Saving Changes <Spinner/> </>:"Save Changes"}</button>
                          </form>
                    </div>
            </div>
            </div>
          </div>
          )
}

export default EditProfile