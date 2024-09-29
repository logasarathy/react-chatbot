import moment from "moment";
export const Analyze=(text)=>{
    
    if(text.includes('hi')||text.includes('hai')||text.includes('hello'))
        return 'hi,how can i help you?'
    else if(text.includes('date'))
        return moment().format('MMMM DO YYYY')
    else if(text.includes('time'))
        return moment().format('h:mm:ss a')
    else if(text.includes('google link'))
        return 'https:/www.google.com'
    else if(text.includes('intrest'))
        return 'bank intrest rate is 8.7'
    else if (text.includes('thankyou'))
        return 'welcome'
    return"I can't get you"

}