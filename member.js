function skillsMember()  {
  // Get the member's skills

  // Get the member's skills
  var member = new Member();
  member.skills = new Array();
  member.skills[0] = "JavaScript";
  member.skills[1] = "HTML";
  member.skills[2] = "CSS";

  // Add a new skill
  member.skills.push("Node.js");

  // Remove a skill
  member.skills.splice(1, 1);

  // Display the member's skills
  for (var i = 0; i < member.skills.length; i++) {
    console.log(member.skills[i]);
  }
}