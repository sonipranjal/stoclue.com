import LayoutComponent from '@/components/LayoutComponent';
import TeamPerson from '@/components/team/TeamPerson';

const team = [
  {
    name: 'Pranjal Soni',
    img_url: '',
    about: '',
    contact: '',
  },
  {
    name: 'Monil Jain',
    img_url: '',
    about: '',
    contact: '',
  },
  {
    name: 'Devendra Jat',
    img_url: '',
    about: '',
    contact: '',
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
          Meet the team
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
