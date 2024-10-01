import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faAtom,  faTableList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Sidebar() {
  return (
    <div className="sidebar-container h-screen  text-white w-64 overflow-y-auto">
      <div className="sidebar-header p-4 flex justify-between items-center">
        <FontAwesomeIcon icon={faTableList} className="text-lg" />
        <FontAwesomeIcon icon={faEdit} className="text-lg" />
      </div>

      <ul className="list p-4">
        <li className="sidebar-item flex items-center  justify-between p-2 rounded-lg hover:bg-gray-800">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faAtom} className="text-lg mr-3" />
            <span>ChatGPT</span>
          </div>
        </li>
        <li className="sidebar-item flex items-center justify-between p-2 mt-2 rounded-lg hover:bg-gray-800">
          <div className="flex items-center">
            <span className="material-symbols-outlined text-lg mr-3">interests</span>
            <span>Explore GPTs</span>
          </div>
        </li>
      </ul>

      <div className="sections p-4">
        {/* Today Section */}
        <div className="section mb-6">
          <span className="font-bold text-sm">Today</span>
          {renderSectionItems(8)}
        </div>

        {/* Yesterday Section */}
        <div className="section mb-6">
          <span className="font-bold text-sm">Yesterday</span>
          {renderSectionItems(4)}
        </div>

        {/* June Section */}
        <div className="section">
          <span className="font-bold text-sm">September</span>
          {renderSectionItems(5)}
        </div>
      </div>
    </div>
  );
}

const renderSectionItems = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push(
      <p key={i} className="text-gray-400 p-2 mt-2  items-center hover:bg-gray-800 rounded-lg">
        Using FontAwesomeIcon
      </p>
    );
  }
  return items;
};

export default Sidebar;
