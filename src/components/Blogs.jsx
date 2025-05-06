import React, { useState } from 'react';
import './Blogs.css';

const blogData = [
  {
    title: "The Art of Brewing the Perfect Espresso",
    description: "Espresso is the foundation of many coffee drinks. Learn the secrets of making the perfect shot.",
    author: "Jonathan Brewster",
    date: "5 Apr 2025",
    image: "/espresssso.jpg",
    fullContent: "Espresso is often regarded as the ultimate test for any barista. In this blog, we dive deep into the art of brewing the perfect espresso, covering everything from the right grind size to proper tamping techniques and ideal water temperature."
  },
  {
    title: "Understanding Coffee Beans: Arabica vs Robusta",
    description: "The two most common types of coffee beans—Arabica and Robusta—each bring unique flavors.",
    author: "Laura Green",
    date: "10 Apr 2025",
    image: "/arabica.jpg",
    fullContent: "Arabica and Robusta are the two dominant coffee bean varieties. This blog explores the differences between them in terms of flavor, growing conditions, and caffeine content, helping you choose the perfect bean for your brew."
  },
  {
    title: "How to Make a Perfect Cold Brew at Home",
    description: "Cold brew coffee is a refreshing way to enjoy your coffee. Here's how to make it at home.",
    author: "Eva Smith",
    date: "12 Apr 2025",
    image: "/coldd brew.jpg",
    fullContent: "Cold brew coffee is a fantastic way to enjoy your coffee on a hot day. This blog breaks down the steps to make the perfect cold brew, including the right coffee-to-water ratio and how long to let it steep for the best flavor."
  },
  {
    title: "The Rise of Specialty Coffee Shops",
    description: "Specialty coffee shops have gained massive popularity. But what makes them different from your regular café?",
    author: "Tom Harris",
    date: "15 Apr 2025",
    image: "/rise.jpg",
    fullContent: "In recent years, specialty coffee shops have transformed the coffee culture. From single-origin beans to unique brewing methods, this blog explores what sets specialty coffee shops apart and why they're worth the visit."
  },
  {
    title: "The Health Benefits of Drinking Coffee",
    description: "Coffee isn't just a delicious drink—it also comes with a number of health benefits.",
    author: "Laura Green",
    date: "20 Apr 2025",
    image: "/7f4ac7e72d673bd8d78423dc040132fd.jpg",
    fullContent: "Studies have shown that coffee can improve mental alertness, boost metabolism, and even lower the risk of certain diseases. This blog takes a closer look at the various health benefits of drinking coffee on a regular basis."
  },
  {
    title: "Exploring Different Coffee Brewing Methods",
    description: "From French Press to Aeropress, different brewing methods produce distinct coffee experiences.",
    author: "Jonathan Brewster",
    date: "25 Apr 2025",
    image: "/brewing.jpg",
    fullContent: "There are numerous ways to brew coffee, each method producing its own unique flavor profile. This blog explores popular brewing techniques such as French Press, Aeropress, and pour-over, and explains which method is best for different tastes."
  },
  {
    title: "How to Pair Coffee with Food",
    description: "Just like wine, coffee can be paired with food to enhance both the flavors of the dish and the drink.",
    author: "Eva Smith",
    date: "28 Apr 2025",
    image: "/pairing.jpg",
    fullContent: "Pairing coffee with food can elevate the dining experience. This blog offers tips on pairing different coffee types with various foods, from pastries to savory dishes, for the perfect combination."
  }
 
];

export default function BlogPage() {
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  const toggleReadMore = (index) => {
    if (expandedBlogIndex === index) {
      setExpandedBlogIndex(null);
    } else {
      setExpandedBlogIndex(index);
    }
  };

  return (
    <div className="blogPage">
      <div className="heroSection">
        <h2>Discover Our Latest Insights</h2>
        <p>Discover rich and aromatic stories about coffee culture, brewing techniques, and bean-to-cup journeys.</p>
      </div>

     
      <h1 className="blogHeader">Recent blog posts</h1>
      <div className="blogGrid">
        {blogData.map((blog, index) => (
          <div key={index} className="blogCard">
            <div className="blogImage">
              <img src={blog.image} alt={blog.title} />
            </div>
            <div className="blogDetails">
              <h3>{blog.title}</h3>
              <p className="desc">{blog.description}</p>
              <div className="author">
                <span>{blog.author}</span> • <span>{blog.date}</span>
              </div>
            
              <div className="readMore" onClick={() => toggleReadMore(index)}>
                {expandedBlogIndex === index ? "Read Less" : "Read More"}
              </div>
              {expandedBlogIndex === index && <p>{blog.fullContent}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
