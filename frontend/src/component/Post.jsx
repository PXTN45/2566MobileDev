import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <Link>
          <img
            src="https://blog.eduhub.tv/wp-content/uploads/2022/04/APR1115_EP384-%E0%B8%97%E0%B8%B3%E0%B9%84%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%80%E0%B8%A3%E0%B9%87%E0%B8%81%E0%B8%8B%E0%B9%8C%E0%B8%96%E0%B8%B6%E0%B8%87%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%A5%E0%B9%87%E0%B8%81_%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%99%E0%B8%AD%E0%B8%99.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="texts">
        <Link>
          <h2>สมมติฐานใหม่ ทำไมทีเร็กซ์ถึงแขนสั้น?</h2>
        </Link>
        <p className="info">
          <a href="" className="author">
            Nattaphong
          </a>
          <time>25 เมษายน 2022</time>
        </p>
        <p className="summary">
          เหล่านักบรรพชีวินวิทยาต่างสงสัยมานานหลายสิบปี
          ว่าทำไมวิวัฒนาการจึงเลือกให้ ทีเร็กซ์ มีแขนที่สั้นเช่นนี้
          ทั้งที่ความยาวทั้งตัว 45 ฟุตอาจมีกะโหลกศีรษะยาว 5 ฟุต
          แต่กับมีแขนที่ยาวเพียง 3 ฟุตเท่านั้น ซึ่งเทียบเท่ากับคนสูง 6
          ฟุตที่มีแขน 5 นิ้ว แขนของมันเป็นหัวข้อที่น่าสนใจอย่างยิ่ง
          เนื่องจากมีขนาดเล็กเกินไปที่จะเป็นส่วนหนึ่งของโครงกระดูก
        </p>
      </div>
    </div>
  );
};

export default Post;
