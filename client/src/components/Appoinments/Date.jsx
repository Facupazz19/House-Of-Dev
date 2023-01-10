import React from "react"
import axios from "axios"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Date = () => {
    const user = useSelector((state) => state.user)
    const [date, setDate] = useState("")
    const { id } = useParams()

    const handleSubmit = () => {
        axios
            .post(`http://localhost:3001/api/date/add/${id}`,
                {
                    userId: user.id,
                    date: date
                }, { withCredentials: true })
            .then(res => res.data)
            .catch(error => console.log(error))
    }

    const handleChangeDate = (e) => {
        setDate(e.target.value)
    }


    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input onChange={handleChangeDate} type="datetime-local" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Date