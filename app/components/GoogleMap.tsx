export default function GoogleMap() {
  return (
    <div className="flex justify-center py-10">
      <div className="w-full max-w-screen-xl h-[500px] relative overflow-hidden rounded-lg shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.489254272819!2d141.3340605!3d43.1162731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b28ae4318c1d3%3A0x72648e1413b149fb!2z6a2a5aSnIOWQjeWQjeW6lw!5e0!3m2!1sja!2sjp!4v1692261600000=ja"
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
