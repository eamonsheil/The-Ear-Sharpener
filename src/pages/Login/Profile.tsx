import { useAuth0 } from "@auth0/auth0-react";

export default function Profile () {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
//   const token = (async () => await getAccessTokenSilently())()
// console.log("token: ", token)
  console.log(user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

    if (isAuthenticated && user){
        return (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    }
    else return null;
    
};