// $(()=>{
//   console.log('script loaded')

//   $('button').click(()=>{
//     console.log('getting random bar')
//     const rand = Math.round(Math.random()*151)+1
//     $.ajax({
//       url: `https://api.yelp.com/v3/businesses/bars-new-york`,
//       method: 'GET',
//       success: (data)=>{
//         console.log(data)
//         const 3bars = {
//           name: data.name,
//           address: data.address,
//           zipcode: data.zipcode,
//           phone: data.phone,
//           type: data.type,
//           cost: data.cost
//         }
//         sendToDB(3bars)
//       }
//     })
//   })

//   const sendToDB = DRANKS =>{
//     console.log(`Saving ${DRANKS.name} to DB`)
//     $.ajax({
//       url: '/3bars',
//       method: 'POST',
//       data: dranks
//     }).done(data=>{
//       window.location = `http://localhost:3000/dranks/${data.id}`
//     })
//   }


// })