import express from "express";

const app = express();

const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const post_length = Object.keys(blog).length;
    const blogpost = blog;
    res.render("index.ejs", {index_length:post_length, blogs:blogpost});
});


app.get("/create", (req, res) =>{
    res.render("create.ejs");

});
app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});

app.use("/about", (req, res)=>{
    res.render("about.ejs");
});

app.post("/create", (req, res) =>{
  blog.push(req.body);
  res.redirect("/");
});

// app.delete("/delete", (req, res) ={

// } );


app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);    
});


const blog = [
    {
      
      title: "The Evolution of Artificial Intelligence",
      author: "John Doe",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Future Tech"],
      date: "March 27, 2025",
      subcontect:"The Rise of AI: Transforming the Future",
      content: `Artificial Intelligence (AI) has transformed nearly every aspect of human life. From self-driving cars to smart assistants like Siri and Alexa, AI is at the forefront of technological advancement. 
      What started as a theoretical concept in the mid-20th century has now become a reality that shapes industries worldwide. 
  
      AI can be categorized into three types: Narrow AI, General AI, and Super AI. Narrow AI, which includes technologies like chatbots and recommendation algorithms, is the most prevalent today. 
      General AI, capable of performing any intellectual task that a human can do, is still under research. Super AI, surpassing human intelligence, remains hypothetical but sparks debates about ethics and control. 
  
      Industries such as healthcare, finance, and manufacturing are leveraging AI to enhance efficiency. AI-powered diagnostic tools help doctors detect diseases at an early stage. In finance, AI algorithms detect fraudulent activities and optimize investment strategies. 
      Meanwhile, in manufacturing, AI-driven robots streamline production lines. 
  
      However, the rise of AI also brings challenges. Ethical concerns, job displacement, and data privacy issues remain major concerns. Governments worldwide are working to create regulations that balance innovation with responsibility. 
  
      The future of AI is promising. With advancements in deep learning, neural networks, and quantum computing, AI will continue to evolve. The question remains: will AI remain a tool for humans, or will it redefine what it means to be intelligent?`
    },
    {
      
      title: "The Future of Web Development in 2025",
      author: "Jane Smith",
      category: "Web Development",
      tags: ["JavaScript", "React", "Next.js", "AI-driven coding"],
      date: "March 26, 2025",
      subcontect:"Next-Gen Web Technologies: What to Expect?",
      content: `Web development is constantly evolving, and in 2025, we see major shifts in the way websites and applications are built. Technologies like serverless computing, Progressive Web Apps (PWAs), and AI-assisted coding are gaining momentum. 
  
      The Rise of Serverless Architecture:
      Developers are moving away from traditional hosting towards serverless computing, where cloud providers dynamically allocate resources. This reduces costs and enhances scalability. 
  
      AI-Driven Development:
      AI-powered tools are making coding faster and more efficient. Platforms like GitHub Copilot assist developers by suggesting code snippets, reducing development time. 
  
      Jamstack and Headless CMS:
      Jamstack architecture, combined with Headless CMS solutions, is revolutionizing content management. Companies are adopting Next.js, Nuxt.js, and SvelteKit for their ability to deliver high-performance web experiences. 
  
      As the demand for better user experiences grows, accessibility, security, and performance will be the main focus areas for developers in 2025.`
    },
    {
      id:3,
      title: "Mastering JavaScript: A Guide for Beginners",
      author: "Alex Johnson",
      category: "Programming",
      tags: ["JavaScript", "ES6", "Web Development"],
      date: "March 25, 2025",
      subcontect:"Your Roadmap to Becoming a JavaScript Pro",
      content: `JavaScript is the backbone of web development. Whether you're building a simple website or a complex web app, mastering JavaScript is crucial. 
  
      Understanding ES6+ Features:
      Modern JavaScript includes powerful features like arrow functions, async/await, template literals, and destructuring. These features make code more readable and efficient. 
  
      Working with APIs and Asynchronous Code:
      APIs allow JavaScript applications to communicate with external services. Using fetch() and async/await, developers can retrieve and display data dynamically. 
  
      Exploring Frameworks and Libraries:
      Frameworks like React, Vue, and Angular help streamline front-end development. On the back end, Node.js enables full-stack JavaScript development. 
  
      Practicing JavaScript by building projects, contributing to open-source, and staying updated with new trends will help you become a skilled developer.`
    },
    {
      title: "Cybersecurity Trends in 2025",
      author: "Emily Davis",
      category: "Cybersecurity",
      tags: ["Data Protection", "Hacking", "Security"],
      date: "March 24, 2025",
      subcontect:"How to Stay Safe in an Increasingly Digital World",
      content: `As technology advances, so do cybersecurity threats. In 2025, hackers are using AI to launch sophisticated attacks, making cybersecurity a critical industry. 
  
      Zero-Trust Security Models:
      Organizations are implementing Zero-Trust Architecture (ZTA), where every access request is verified before being granted. 
  
      AI in Cybersecurity:
      AI-driven security systems analyze threats in real-time and help prevent cyber attacks before they happen. 
  
      The Importance of Data Encryption:
      Encrypting sensitive data ensures that even if hackers gain access, the information remains unreadable. 
  
      Whether you're an individual or a business, practicing multi-factor authentication (MFA), using VPNs, and staying informed about phishing attacks is essential to staying secure in the digital age.`
    },
    {
      title: "The Remote Work Revolution",
      author: "Michael Brown",
      category: "Business",
      tags: ["Productivity", "Work-Life Balance", "Remote Teams"],
      date: "March 23, 2025",
      subcontect:"How Remote Work is Reshaping the Workplace",
      content: `Remote work has shifted from a temporary solution to a permanent work model for many companies. Businesses are now adapting to hybrid and fully remote setups, changing the way teams collaborate. 
  
      Digital Collaboration Tools:
      Apps like Slack, Zoom, and Trello are keeping remote teams connected and productive. 
  
      Work-Life Balance Challenges:
      Remote employees face difficulties separating work from personal life. Establishing dedicated workspaces and setting clear boundaries can help. 
  
      The Future of Hybrid Work:
      Many companies are adopting hybrid work models, where employees split their time between home and office. 
  
      Remote work is here to stay. Businesses that embrace flexibility and digital collaboration will thrive in the new era of work.`
    },
     
      
      
  ];