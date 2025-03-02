export default function GoogleMap() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-screen-xl h-[500px] relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.489254272819!2d141.3008782768915!3d43.07853317107188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28d76b47a3a9%3A0x97d382376b012345!2s琴似1%E6%9D%A12%E4%B8%81%E7%9B%AE6-8%2C%20%E8%A5%BF%E5%8C%BA%2C%20%E6%9C%AD%E5%B9%8C%E5%B8%82%2C%20%E5%8C%97%E6%B5%B7%E9%81%93%20063-0811%2C%20Japan!5e0!3m2!1sja!2sjp&hl=ja"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
