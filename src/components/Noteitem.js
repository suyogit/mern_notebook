import React from 'react'

const Noteitem = (props) => {
    const { note } = props;
    return (
        <div className="col-md-3">
            <div className="card my-3 ">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maxime laborum amet quidem quia eveniet sit magni molestias, eaque porro quaerat temporibus. Reprehenderit vel totam molestias similique est veritatis saepe?</p>
                </div>
            </div>

        </div>
    )
}

export default Noteitem