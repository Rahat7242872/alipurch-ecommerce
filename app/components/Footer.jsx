// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
export const FooterAlipurch = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              We are a leading e-commerce platform offering the best products at affordable prices.
            </p>
          </div>
  
          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/products" className="text-sm text-gray-400 hover:text-white">Products</a></li>
              <li><a href="/contact" className="text-sm text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm text-gray-400">Email: support@ecommerce.com</p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
            <p className="text-sm text-gray-400">Address: 123 Main St, City, Country</p>
          </div>
  
          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-sm text-gray-400 hover:text-white">Facebook</a>
              <a href="https://twitter.com" className="text-sm text-gray-400 hover:text-white">Twitter</a>
              <a href="https://instagram.com" className="text-sm text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };
  
