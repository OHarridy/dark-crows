import {Accordion, AccordionItem, CheckboxGroup, Checkbox} from "@nextui-org/react";
import { useState } from "react";
const DropDownniiga = () => {
  const [blogs, setBlogs] = useState([
    {tag:'Fruits and Vegetables', title: 'They need to be fed 3 chickens a day', body: 'Prove you\'re not racist through donating to our token black children, guaranteed to boost your PR levels by at least 69%.', author: 'Feeders',   id: 1, donatedAmount: 1000 ,maximumAmount: 10000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 1,                                                       source: 'https://t4.ftcdn.net/jpg/01/62/37/69/360_F_162376940_TvJVgP7PPQFOtpTRLmLKkpCg3RjaQIyj.jpg'},
    {tag:'School', title: 'Cleanliness is key',                  body: 'I\'m the garbage man, I EAT GARBAGE.',                                           author: 'Garbage Man',   id: 2, donatedAmount: 1000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 2,                                                                                               source: 'https://static.demilked.com/wp-content/uploads/2021/09/615174557e36d-6149dc29aada1_ooee48bo1kl71__700.jpg'},
    {tag:'Medication', title: 'The ocean could use some help',   body: 'Dolphins are known to torture small animals, bully the weak and sexually assault divers, donate if you think all of that is cool and want them to continue living.', author: 'Dolphin Lives Matter',   id: 3, donatedAmount: 7000 , maximumAmount: 70000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 3, source: 'https://www.noaa.gov/sites/default/files/styles/landscape_width_1275/public/legacy/image/2019/Jun/marine_debris_hawaii_NOAAphoto.jpg?h=607ea137&itok=ozgMBxq0'},
    {tag:'Medical Devices', title: 'Nuclear bad boohoo',         body: 'Nuclear Energy cool and all but the waste it produces is almost unmanageable.',  author: 'Nukes Are Rad',   id: 4, donatedAmount: 20000 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 4,                                                                                            source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDmKYMOU6cpz4XUWpn5D77N1WPDpi9iSXeCwWgwZCkw&s'},
    {tag:'Stationery', title: 'It resurfaced',                   body: 'Fifth lorem',                                                                    author: 'example', id: 5,  donatedAmount: 100 , maximumAmount: 5000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 5,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvMS06kJdjE7IED7dqcClRGhQ7Ty2o9hnJXsYuxKMd7g&s'},
    {tag:'Clothes', title: 'It stayed',                          body: 'Sixth lorem',                                                                    author: 'chapter', id: 6,  donatedAmount: 700 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 6,                                                                                                    source: 'https://cdn.britannica.com/02/154202-050-001D9E0A/Bulldozer-sanitary-landfill-waste-garbage.jpg'},
    {tag:'Board Games', title: 'It stayed',                      body: 'Seventh lorem',                                                                  author: 'chapter', id: 7,  donatedAmount: 900 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;},  donatorCount: 7,                                                                                                    source: 'https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_0/Poverty_1672659305.webp'},
    {tag:'Clothes', title: 'It stayed',                          body: 'Eighth lorem',                                                                   author: 'chapter', id: 8,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 8,                                                                                                    source: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw37Fje-w8cnkt5HhMmq6PsMnCLqoUIhXEdvHeESyydg&s'},
    {tag:'Books', title: 'It stayed',                            body: 'Ninth lorem',                                                                    author: 'chapter', id: 9,  donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Dolls', title: 'It stayed',                             body: 'Tenth lorem',                                                                    author: 'chapter', id: 10, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Medical Equipment', title: 'It stayed',                body: 'Eleventh lorem',                                                                 author: 'chapter', id: 11, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Blood', title: 'It stayed',                            body: 'Twelveth lorem',                                                                 author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Blood', Area:"", Governorate:"", Hospital:"", title: 'It stayed',         body: 'Thirteenth lorem',                                                               author: 'chapter', id: 13, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Canned', title: 'It stayed',                           body: 'Fourteenth lorem',                                                               author: 'chapter', id: 14, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Stuffed Toys', title: 'It stayed',                     body: 'Fifteenth lorem',                                                                author: 'chapter', id: 15, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Sports', title: 'It stayed',                           body: 'Ninth lorem',                                                                    author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
    {tag:'Fresh', title: 'It stayed',                            body: 'Ninth lorem',                                                                    author: 'chapter', id: 12, donatedAmount: 1000 , maximumAmount: 1000 , get percentage() {return this.donatedAmount / this.maximumAmount;}, donatorCount: 9,                                                                                                    source: 'https://i.redd.it/cairo-egypt-v0-st0vbse97bj91.jpg?width=960&format=pjpg&auto=webp&s=f204038cef22aa559c756acb7336c285f506d7fc'},
]);
  const [selectedClothes, setSelectedClothes] = useState([]);
  const [selectedToys, setSelectedToys] = useState([]);

  const handleClothesChange = (values) => {
    setSelectedClothes(values);
  };
  
  const [searchTerm, setSearchTerm] = useState(""); 
  const handleToysChange = (values) => {
    setSelectedToys(values);
  };
  const filteredItems = blogs.filter(item =>{
    if(selectedClothes.length === 0 && selectedToys === 0){
      console.log(selectedClothes.length);
      return   blog.title.toLowerCase().includes(selectedSubcategory.toLowerCase());
    }
    else
    return selectedClothes.includes(item.tag) || selectedToys.includes(item.tag)});
    return (
<div>
<Accordion  >
      <AccordionItem key="1" aria-label="Clothes" title="Clothes" className="w-[300px]">
        
      <CheckboxGroup onChange={handleClothesChange}>
      <Checkbox value="Age">Age</Checkbox>
      <Checkbox value="Gender">Gender</Checkbox>
      <Checkbox value="Season">Season</Checkbox>
    </CheckboxGroup>
        
      </AccordionItem>
      <AccordionItem key="2" title="Toys">
        
      <CheckboxGroup onChange={handleToysChange}>
      <Checkbox value="Board Games">Board Games</Checkbox>
      <Checkbox value="Stuffed Toys">Stuffed Toys</Checkbox>
      <Checkbox value="Dolls">Dolls</Checkbox>
      <Checkbox value="Sports">Sports</Checkbox>
      <Checkbox value="Cars">Cars</Checkbox>
      <Checkbox value="Outdoor">Outdoor</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="3" title="Food">  

      <CheckboxGroup>
      <Checkbox value="Fruits & Veggies">Fruits & Veggies</Checkbox>
      <Checkbox value="sydney">Fresh</Checkbox>
      <Checkbox value="london">Canned</Checkbox>
      <Checkbox value="tokyo">Baked</Checkbox>
    </CheckboxGroup>


      </AccordionItem>
      <AccordionItem key="4" title="Blood">  

<CheckboxGroup>
<Checkbox value="Hospital">Hospital</Checkbox>
<Checkbox value="Governorate">Governorate</Checkbox>
<Checkbox value="Area">Area</Checkbox>
</CheckboxGroup>


</AccordionItem>
<AccordionItem key="5" title="Medical">  

<CheckboxGroup>
<Checkbox value="Medical Devices">Medical Devices</Checkbox>
<Checkbox value="Medical Equipment">Medical Equipment</Checkbox>
<Checkbox value="Medication">Medication</Checkbox>
</CheckboxGroup>


</AccordionItem>
<AccordionItem key="6" title="School">  

<CheckboxGroup>
<Checkbox value="Books">Books</Checkbox>
<Checkbox value="Stationery">Stationery</Checkbox>
</CheckboxGroup>


</AccordionItem>
    </Accordion>


{filteredItems.map(item => (
  <div key={item.id}>
    {/* Render your item here */}
  </div>
))}
</div>
);
}
 
export default DropDownniiga;
