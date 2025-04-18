import "./BannerRightSection.css";
function BannerRightSection() {
  return (
    <div className="main_header_right">
      <div className="main_header_right_img_container">
        <img
          src="../public/images/Group 15.png"
          alt=""
          className="main_header_right_img"
        />
        <div className="food_order_deliver">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9V13C11 13.2652 11.1054 13.5196 11.2929 13.7071L13.2929 15.7071C13.6834 16.0976 14.3166 16.0976 14.7071 15.7071C15.0976 15.3166 15.0976 14.6834 14.7071 14.2929L13 12.5858V9Z"
                fill="#323232"
              />
              <path
                d="M4.60006 5.30006C4.15823 5.63143 3.53143 5.54189 3.20006 5.10006C2.86869 4.65823 2.95823 4.03143 3.40006 3.70006L5.40006 2.20006C5.84189 1.86869 6.46869 1.95823 6.80006 2.40006C7.13143 2.84189 7.04189 3.46869 6.60006 3.80006L4.60006 5.30006Z"
                fill="#323232"
              />
              <path
                d="M18.6001 2.20018C18.1582 1.86881 17.5314 1.95835 17.2001 2.40018C16.8687 2.842 16.9582 3.46881 17.4001 3.80018L19.4001 5.30018C19.8419 5.63155 20.4687 5.542 20.8001 5.10018C21.1314 4.65835 21.0419 4.03155 20.6001 3.70018L18.6001 2.20018Z"
                fill="#323232"
              />
            </svg>
            <span>Delivery</span>
          </div>
          <div>30 mins</div>
        </div>
      </div>
    </div>
  );
}
export default BannerRightSection;
