export const clusters = [
  {
    id: 'csi-fingerprinting',
    label: 'CSI Fingerprinting',
    papers: [
      {
        id: '2508-20861',
        shortTitle: 'Siamese CNN for PLA',
        fullTitle: 'Physical Layer Authentication via Siamese CNNs over CSI Fingerprints',
        subtitle: 'Reproduction notes on deep similarity learning applied to IEEE 802.11n channel state information for device authentication.',
        authors: 'Vinícius Nascimento',
        year: '2025',
        tags: ['Physical Layer', 'CSI', 'Siamese CNN', '802.11n', 'WLAN TGn'],
        arxivUrl: 'https://arxiv.org/abs/2508.20861',
        sections: [
          { id: 'introduction',  label: 'Introduction' },
          { id: 'background',    label: 'Background' },
          { id: 'methodology',   label: 'Methodology' },
          { id: 'experiments',   label: 'Experiments' },
          { id: 'results',       label: 'Results' },
          { id: 'discussion',    label: 'Discussion' },
        ],
      },
    ],
  },
]

export function findPaper(id) {
  for (const cluster of clusters) {
    const paper = cluster.papers.find(p => p.id === id)
    if (paper) return paper
  }
  return undefined
}