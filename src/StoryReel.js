import Story from './Story';
import './StoryReel.css';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock1265891953huge-1675854591428.jpg"
        profileSrc="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
        title="Duc Thanh Dao"
      />
      <Story
        image="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
        profileSrc="https://img.freepik.com/premium-vector/software-engineer-writing-code-computer-coder-programming-database-programmer-typing-script-solves-problems-algorithm-digital-development-flat-isolated-vector-illustration-white_633472-6162.jpg?semt=ais_hybrid&w=740"
        title="Cool coder"
      />
      <Story
        image="https://i2.ex-cdn.com/crystalbay.com/files/content/2024/11/19/cham-sa-pa-cham-nhung-tang-may-kham-pha-thien-duong-mua-dong-voi-hang-loat-uu-dai-khung-1-0910.jpg"
        profileSrc="https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/12/What-Does-a-Coder.jpg"
        title="Anna Minerwa"
      />
      <Story
        image="https://familyapp.com/wp-content/uploads/2021/07/volunteer-work-4-easy-tips-for-the-entire-family_7ggnwbn.jpg"
        profileSrc="https://static.vecteezy.com/system/resources/previews/016/746/979/non_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg"
        title="Duc Thanh Dao"
      />
    </div>
  );
}

export default StoryReel;
