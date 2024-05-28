import React, { useState } from 'react'
import axios from 'axios';
import Uploadvideo from './uploadimage/Uploadvideo';
import "./addcours.css"

const Addcour = () => {

    const uploadPresetName = "lv9quzkj";
    const cloudName = "dejkmgo3r";
    const [trueChecked, setTrueChecked] = useState(false);
    const [falseChecked, setFalseChecked] = useState(false);
    const [video, setVideo] = useState("");
    const [nom, setNom] = useState("");
    const [msg, setMsg] = useState('');


    const handleTrueChange = (event) => {
        setTrueChecked(event.target.checked);
        setFalseChecked(false);
    }

    const handleFalseChange = (event) => {
        setFalseChecked(event.target.checked);
        setTrueChecked(false);
    }

    async function handleVideo(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append("upload_preset", uploadPresetName);
        try {

            const cloudvideo = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload` +
                `?upload_preset=${uploadPresetName}` +
                `&resource_type=auto`
                , formData
            )

            setVideo(res.data.secure_url);
            console.log(res.data);
            setMsg('video succes upload');

        } catch (err) {
            console.error(err);
            setMsg('erreur upload');
        }
    }

    function handleSubmit() {
        let data = {
            name: nom,
            free: trueChecked,

            urlVideo: video,
        }
        axios.post('http://localhost:8000/v1/courses', data)
            .then(res => (console.log(res))).catch(err => console.error(err));
    }
    return (
        <div>

            <section className='contacts padding'>
                <div className="p-4   border  ">
                    <h1>Add course</h1>
                </div>
                <div className='container  flexSB'>


                    <div className='rightuser row'>


                        <div className='beforefooter'></div>

                        <form onSubmit={handleSubmit}>

                            <div className=''>
                                <div>
                                    <label >Nom du cours : </label>
                                    <input className='' required type='text' onChange={(e) => setNom(e.target.value)} />
                                </div>
                                <div>

                                    <label>Niveau : </label>
                                    <input className='' required type='number' min={2} max={4} onChange={(e) => setNiveau(e.target.value)} />
                                </div>
                                <div>
                                <label>Description : </label>
                                <textarea cols="10" rows="5">Create a text here...</textarea></div>

                                <div className="flex flex-wrap">
                                    <div className="flex items-center me-12">
                                        <input id="red-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="red-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Free</label>
                                    </div>
                                    <div className="flex items-center me-4">
                                        <input id="green-radio" type="radio" value="" name="colored-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="green-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Paid</label>
                                    </div>
                                    



                                </div>
                                <div>
                                    <label>Insére le PDF :</label>
                                    <input type='file' accept=".PDF" />
                                </div>

                                <Uploadvideo handleVideo={handleVideo} />

                            </div>

                            {/* <button type='submit' className='profile-submit-btn'>Add</button> */}
                            <div className='beforefooter'></div>

                            <button type="submit" className='allbtn' onClick={handleSubmit}>Add</button>

                        </form >
                    </div>

                </div>

            </section>


        </div>
    )
}

export default Addcour
