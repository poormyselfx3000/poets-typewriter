// const poem_body = "<title>Thơ Bốn Thủ</title><omg>Con đò bình thủy còn đưa\nDòng sông vẫn đợi người xưa vẫn chờ\nAnh về cho đẹp giấc mơ\nCủa người em gái bên bờ sông hương\n\nRồi có mùa xuân nào hoa không nở\nCó tâm sự nào buồn như đêm mưa\nCó mùa đông nào không giá lạnh\nThì biết tình yêu mấy cho vừa.</omg>"
const poem_body = "<omg>Con đò bình thủy còn đưa\nDòng sông vẫn đợi người xưa vẫn chờ\nAnh về cho đẹp giấc mơ\nCủa người em gái bên bờ sông hương\n\nRồi có mùa xuân nào hoa không nở\nCó tâm sự nào buồn như đêm mưa\nCó mùa đông nào không giá lạnh\nThì biết tình yêu mấy cho vừa.<\/omg>"
// extact title and content from poem_body

// const title = poem_body.match(/<title>(.*)<\/title>/)[1];
const omg = poem_body.match(/<omg>(.*)<\/omg>/);

// console.log(title);
console.log(omg);
