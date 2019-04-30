const uni = []

for (let i = 0; i < graduates.length; i++){
  uni.push(graduates[i].university.match(/Uni/))
  console.log(uni[i])
}