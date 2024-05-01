import { useState } from 'react';
const DonationPage = () => {
    var [niggapalace] = useState(
        {place: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1026.3439807631817!2d31.31928048790144!3d30.08857547519141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2f516afbb9%3A0xf970104d0edfceb4!2sAL%20Ittihadiya%20Palace!5e0!3m2!1sen!2seg!4v1714594919987!5m2!1sen!2seg'}
);
    return (  
        <div>
            <div key={niggapalace.place}> 
                <iframe src={niggapalace.place} width="300" height="300"></iframe>
            </div>
        </div>
     );
}
export default DonationPage;