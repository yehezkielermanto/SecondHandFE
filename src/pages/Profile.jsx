import '../public/css/tailwind.css'
import ProfileForm from '../components/ProfileForm'
// import ProfileHeader from '../components/ProfileHeader'

function Profile() {
  return (
    <div className="App">
      <section className="h-screen gradient-form">
        {/* <ProfileHeader /> */}
        <ProfileForm />
      </section>
    </div>
  )
}

export default Profile
