function skillsMember() { 
  var member = {
    name: "John Doe",
    age: 25,
    skills: ["HTML", "CSS", "JS"],
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    },
  };

  return member;
}

function showSkills() {
  var member = skillsMember();
  console.log(member.skills);
}
