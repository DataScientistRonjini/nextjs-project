import path from 'path';
import fs from 'fs';

// access the data
function buildPath(){
    // cwd - current working directory
    return path.join(process.cwd(), 'data', 'data.json')
}

function extractData(filePath){
    const jsonData = fs.readFileSync(filePath);
    const data = JSON.parse(jsonData);
    return data;
}

// update the file data.json

export default function handler(req, res){
    const {method} = req;
    // Access our data
    // extract our data
        // res 404 if there are no AllEvents
       // AllEvents - loop through them and identify the EventID
        // extract AllEvents - loop through them and identify the EventID
        // add the email into emails_registered entry - write on our data
            // only if the email doesn't exist
            // check the format of the email is OK
    const filePath = buildPath();
    const {event_categories, allEvents} = extractData(filePath);
    if(!allEvents){
        res.status(404).json({
            status: 404,
            message: 'Events data not found'
        })
    }
    if(method === "POST"){
        const {email, eventId} = req.body;

        if(!email | !email.includes('@')){
            res.status(422).json({message:'Invalid email address'})
            return;
        }
        // we add our code here
        const newAllEvents = allEvents.map(ev =>{
                if(ev.id===eventId){
                    if(ev.emails_registered.includes(email)){
                        res.status(409).json({message:'This email has already been registered'})
                        return ev;
                    }
                    return{
                        ...ev, emails_registered:[...ev.emails_registered, email]
                    }
                }
            return ev;
        }

        )

        fs.writeFileSync(filePath, JSON.stringify({event_categories, allEvents: newAllEvents}))
        
        res.status(200).json({message:`You have been registered successfully with the email: ${email} for the event: ${eventId}`,});
    }

    // method === "GET"{
    //     // we add our code here
    // }
}