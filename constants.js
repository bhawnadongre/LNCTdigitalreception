const prompts = [
    ["college name","College name"],
    ["college address","address","Address"],
    ["email id","emailid","mail","email"],
    ["tnp cell","t&p contact","tnp department","Tnp cell"],
    ["Admission Cell","admission cell","Admission cell"],
    ["Reception","reception"],
    ["lnct hod","LNCT HOD","Lnct hod","lnct osd","Lnct osd","LNCT OSD","hod","Hod","HOD"],
    ["hod lncts","lncts hod","soheb sir","soheb munir","HOD LNCTS","HOD EC","EC HOD LNCTS","lncts ec hod","Soheb munir","Lncts hod ec","Soheb Munir"],
    ["Prof. Rajdeep Shrivastava","rajdeep sir","Rajdeep sir","rajdeep shrivatav","Rajdeep Shrivastav"],
    ["Prof. Rohit Kumar Rathor","rohit sir","rohit kumar rathor","rohit rathor","Rohit sir","Rohit Rathor"],
    ["Prof. Niketan Mishra","niketan mishra","niketan sir","Niketan Mishra","Niketan sir"],
    ["Prof. Saiyed Tazen Ali","Saiyed Tazen Ali","saiyed tazen ali","Saiyed sir","saiyed sir"],
    ["Prof. Vinod Pathak","Vinod Pathak","vinod pathak","Vinod sir","vinod sir"],
    ["Prof. Rajendra Singh","Rajendra Singh","rajendra singh","Rajendra sir","rajendra sir"],
    ["Prof. Sanket Choudhary"," Sanket Choudhary"," sanket choudhary","Sanket sir","sanket sir"],
    ["Prof. Rahul Sharma","Rahul Sharma","rahul sharma","Rahul sir","rahul sir"],
    ["Dr. Aparna Gupta","Aparna Gupta","aparna gupta","Aparna mam","aparna mam"],
    ["Dr. Bhanu Pratap Singh","Bhanu Pratap Singh","bhanu pratap singh","Bhanu sir","bhanu sir"],
    ["Dr. Abhijeet Gupta","Abhijeet Gupta","abhijeet gupta","Abhijeet sir","abhijeet sir"],
    ["Dr. Abhinav Bhargava"," Abhinav Bhargava"," abhinav bhargava","Abhinav sir","abhinav sir"],
    ["Dr. Vivek Jain","Vivek Jain","vivek jain","Vivek sir","vivek sir"],
    
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["Lakshmi Narain College of Technology"],
    ["LNCT Campus, Kalchuri Nagar, (P.O. Kolua) Raisen Road, Bhopal-462022 (M.P)"],
    ["info@lnct.ac.in"],
    ["9 8 2 6 0 6 2 7 3 0, 0755-6185341"],
    ["7440777111, 7201800001, 0755-6185350, 0755-6685400"],
    [" : 0755-6185300,0755-6185300/1/2/3/4/5"],
    ["Dr. Ashok Kumar Rai :618532,9827055261"],
    ["Dr. Soheb Munir : HOD EC Department, LNCTS OLD BLOCK 3rd floor "],
    ["Prof. Rajdeep Shrivastava (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Rohit Kumar Rathor (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Niketan Mishra (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Saiyed Tazen Ali (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Vinod Pathak (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Rajendra Singh (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Sanket Choudhary (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Prof. Rahul Sharma (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Dr. Aparna Gupta (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Dr. Bhanu Pratap Singh (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Dr. Abhijeet Gupta (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Dr. Abhinav Bhargava (AP) LNCTS OLD BLOCK 3rd floor"],
    ["Dr. Vivek Jain (AP) LNCTS OLD BLOCK 3rd floor"],

    

  
   
  ]
  
  // Random for any other user input
  
  const alternative = [
    "Invalid",
    "Information not present",
    "Sorry",
    "Try again",
    "I don't understand"
  ]
  
  // Whatever else you want :)
  
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
  
