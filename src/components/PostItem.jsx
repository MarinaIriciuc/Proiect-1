import React from 'react';


function PostItem(props){
    const {userId, id, title, body} = props;
    return <>
        <div className="container-fluid">
            <div className="card shadow w-50 mt-5">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h6>Id-ul user-ului:</h6>
                        <h5 className="mx-2">{userId}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <h6>Id-ul postarii:</h6>
                        <h5 className="mx-2">{id}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <h6>Titlu:</h6>
                        <h5 className="mx-2">{title}</h5>
                    </div>
                    <div className="d-flex align-items-center">
                        <h6>Content:</h6>
                        <h5 className="mx-2">{body}</h5>
                    </div>
                </div>
            </div>
        </div>
    </>
}


export default PostItem;