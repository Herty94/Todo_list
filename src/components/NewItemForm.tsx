import { TextareaAutosize } from "@mui/core";
import { Input } from "@mui/material";
import Joi from "joi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postData, Item } from "../helpers/mockFunctions";


interface Url {
    url: string
    formFun: any;
}
function validateData(data: Item) {
    const JoiSchema = Joi.object({
        title: Joi.string().required().max(25),
        note: Joi.string().allow("").max(100).optional(),
        date: Joi.alternatives().conditional('date', { is: "", then: Joi.string().allow(""), otherwise: Joi.date().greater('now') }).optional(),
        done: Joi.boolean()
    }).options({ abortEarly: false });
    console.log(JoiSchema.validate(data))
    return JoiSchema.validate(data)
}


const NewItemForm: React.FC<Url> = (props) => {
    const { register, handleSubmit, reset } = useForm();
    const [errMessage, setMessage] = useState([{}]);

    function onSubmit(data: Item) {
        data.done = false;
        // data validation and posting
        console.log(data);
        let response = validateData(data)
        if (response.error) {
            console.log(response.error.details)
            setMessage(response.error.details)
        }
        else {
            console.log("Validated Data")
            setMessage([{}])

            props.formFun(props.url, data);
            reset();

        }
    };
    return (
        <>
            {errMessage && errMessage.map((message: any, index) => {
                return (< p className="text-red-500" key={index} > {message.message}</p>)
            })
            }
            <form
                className="flex text-black rounded-b-xl m-2 flex-col bg-gray-300"
                onSubmit={handleSubmit(onSubmit)}
            >

                <Input
                    {...register("title", { required: true })}
                    type="text"
                    placeholder="Title"
                />
                <TextareaAutosize
                    {...register("note")}
                    className="text-base"
                    placeholder="write notes"
                    maxRows={3}
                />
                <div className="flex flex-row">
                    <label className="text-base pr-4 text-gray-500">Deadline: </label>
                    <Input type="datetime-local" {...register("date")} />
                </div>
                <Input
                    className="bg-white rounded-b-xl hover:bg-gray-200"
                    type="submit"
                    value="Create ToDo Item"
                    disableUnderline={true}
                />
            </form>
        </>);
}


export default NewItemForm;