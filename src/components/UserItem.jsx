import React from 'react';

function UserItem(props) {
    const {name, email, isGoldClient, salary, img, deleteUser, id} = props;
    console.log(img)
    return (
        <div>
         <div className="container-fluid">
             <div className="card shadow w-50 mt-3">
                 <div className="card-body">
                     <div className="d-flex justify-content-end">
                         <button
                             className="btn btn-outline-dark"
                             onClick={e=>deleteUser(id)}>
                             Delete user
                         </button>
                     </div>
                     <div className="d-flex mt-3">
                         <h6>Nume:</h6>
                         <h5 className="px-2">{ name }</h5>
                     </div>
                     <div className="d-flex mt-3">
                         <h6>Email:</h6>
                         <h5 className="px-2">{ email }</h5>
                     </div>
                     { isGoldClient
                         ? <h5 className="mt-3">Client GOLD</h5>
                         : null
                     }
                     <div className="d-flex mt-4">
                         <h6>Salariu:</h6>
                         <h5 className="mx-2">{salary}</h5>
                     </div>
                     <div className="d-flex mt-3">
                         <h6>Imagine:</h6>
                         <img className="mx-2" src={img} width="100"/>
                     </div>
                 </div>
             </div>
         </div>
        </div>
    );
}

export default UserItem;