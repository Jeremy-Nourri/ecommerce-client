import getUserAccount from "../libs/api/get/getUserAccount"

export default async function UserAccount() {

  const user = await getUserAccount();

  console.log(user);

  return (
    <>
      {user && (
        <div className="w-screen h-screen flex items-center justify-center bg-[#f5f5f5]">
          <div className="w-1/2 h-1/2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-bold text-gray-800">Mon compte</h1>
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-800">Nom: {user.lastName}</p>
                <p className="text-gray-800">Prénom: {user.firstName}</p>
                <p className="text-gray-800">Email: {user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}