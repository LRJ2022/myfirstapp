import React, {useState, useEffect} from "react"
import "./QuestCreator.css"

function QuestTemplate(props){   
    const[quests, setQuests]=useState([])  
    const[preview, setPreview]=useState("")            //denne komponent kalder samme funktion, men har tra forskellige "stat"-værdier
    let inputTitle = useFormInputHook("");
    let inputDescription = useFormInputHook("");
    let inputType= useFormInputHook("");
    let inputAmount= useFormInputHook(0);
    let inputItem= useFormInputHook("");
 
    useEffect(() => {
        setPreview(inputType.value + " " + inputAmount.value + " " + inputItem.value);
    }, [inputType.value, inputAmount.value, inputItem.value]);

    function createQuestContent() {
        const newQuest = {
            Title: inputTitle.value,
            description: inputDescription.value,
            preview: preview
        };
        setQuests([...quests, newQuest]);
    }

    function removeQuest(index) {
        const updatedQuests = quests.filter((_, i) => i !== index);
        setQuests(updatedQuests);
    }

    return(
        <>
        <h1>New Feature</h1>
        <h1 className="questTitle" >Quest Creator</h1>
        <h3>Basic Info:</h3>
        <InputForm {...inputTitle} name="Title"/>
        <TextArea {...inputDescription}/>
        <h4>Complete conditions: <i>{preview}</i></h4>
        <SelectType {...inputType}/>
        <InputForm type="number" {...inputAmount} name="Amount"/>
        <InputForm {...inputItem} name="Item/NPC"/>
        <br/>
        <button id="btnCreate" onClick={createQuestContent}>Create quest</button>
        <hr/>
        <div>
                {quests.map((quest, index) => (
                    <QuestContent
                        key={index}
                        Title={quest.Title}
                        description={quest.description}
                        preview={quest.preview}
                        onRemove={() => removeQuest(index)}
                    />
                ))}
            </div>
        </>
       
    )
}
export default QuestTemplate

function useFormInputHook(initialValue){
    const[value, setValue]= useState(initialValue);                   //useState er bare en funktion, som kaldes
    
    function handleChange(event){
        const newValue = event.target.type === 'number' ? parseFloat(event.target.value) : event.target.value;
        setValue(newValue);
    }
    
    return {value:value, onChange:handleChange }
}

function InputForm(props){
    return(
        <>
        <label>{props.name}</label>
        <input {...props}/>
        </>
    )
}

function TextArea(props){
    return(
        <>
    <label>Description</label>
        <textarea {...props}/>
        </>
    )
}

function SelectType(props){
return(
    <>
    <label>Type</label>
    <select {...props}>
        <option value="Gather">Gather</option>
        <option value="Kill">Kill</option>
    </select>
    </>
)
}

function QuestContent(props){
    return(
        <div className="quest" id="questTemplate">
            <div className="questTitle">{props.Title}</div>
            <button className="btnRemoveQuest" onClick={props.onRemove}>x</button>
            <hr/>
            <p>{props.preview}</p>
            <h3>Description</h3>
            <p>{props.description}</p>
        </div>
    )
}





