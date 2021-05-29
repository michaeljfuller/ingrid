export const room1: Room = {id: 'r101', name: 'Room 101'} ;
export const room2: Room = {id: 'r102', name: 'Room 102'} ;

export const floor1: Floor = { id: 'f1', name: '1st Floor', rooms: [room1, room2] };
export const floor2: Floor = { id: 'f2', name: 'Empty Floor', rooms: [] };

export const building1: Building = { id: 'b1', name: 'First Building', floors: [floor1, floor2] };
export const building2: Building = { id: 'b2', name: 'Empty Building', floors: [] };

export const region1: Region = { id: 'r1', name: 'Region 1', buildings: [building1, building2] }
export const region2: Region = { id: 'r2', name: 'Empty Region', buildings: [] }

export const infrastructure: Infrastructure = { regions: [region1, region2] };
