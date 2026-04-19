/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'By Status',
      link: {
        type: 'generated-index',
        title: 'By Status',
        description: 'Browse statements by current mathematical status.',
      },
      items: [
        'proved/mermin-wagner',
        'proved/lieb-robinson',
        'conjectured/eth',
        'disproved/false-area-law-variant',
      ],
    },
    {
      type: 'category',
      label: 'By Subject',
      link: {
        type: 'generated-index',
        title: 'By Subject',
        description: 'Browse by mathematical-physics subfield.',
      },
      items: [
        'subjects/quantum-many-body',
        'subjects/qft',
        'subjects/operator-algebra',
        'subjects/statistical-mechanics',
      ],
    },
    {
      type: 'category',
      label: 'Surveys',
      link: {
        type: 'generated-index',
        title: 'Surveys',
        description: 'Longer overview pages collecting related statements.',
      },
      items: [
        'surveys/status-of-area-laws',
        'surveys/low-dimensional-symmetry-breaking',
      ],
    },
    {
      type: 'category',
      label: 'Open Problems',
      link: {
        type: 'generated-index',
        title: 'Open Problems',
        description: 'Important unresolved directions.',
      },
      items: [
        'open-problems/long-range-area-laws',
      ],
    },
  ],
};

module.exports = sidebars;