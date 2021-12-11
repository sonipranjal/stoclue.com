import LayoutComponent from '@/components/LayoutComponent';
import TeamPerson from '@/components/team/TeamPerson';

const team = [
  {
    name: 'Pranjal Soni',
    img_url: '/assets/pranjal-profile.jpeg',
    about: 'Curious, Focused, Passionate',
    linkedIn: 'https://www.linkedin.com/in/pranjalsoni',
    twitter: 'https://twitter.com/pranjalsoni_',
    role: 'Founder',
  },
];

const Team = () => {
  return (
    <LayoutComponent>
      <div className="p-4">
        <p className="text-3xl font-bold text-center text-gray-800">
          Stoclue Backbone
        </p>
        <p className="mb-32 text-xl font-normal text-center text-gray-500">
          We are trying to create a positive impact in people's lives by
          creating top quality content of stock market.
        </p>
        <div className="flex flex-col items-center space-y-24 md:space-y-0 md:flex-row justify-evenly">
          {team.map((item, idx) => (
            <TeamPerson key={idx} {...item} />
          ))}
        </div>
      </div>
    </LayoutComponent>
  );
};

export default Team;
