import axiosDb from '@/axios/axios-database';

export default {
    data: function () {
        return {
            users: []
        }
    },
    methods: {
        async getAllUsers() {
            try {
                const res = await axiosDb.get(`users.json`);
                const allUsers = res.data;
                
                for (const userId in allUsers) {
                    (this as any).users.push({
                        userId,
                        ...allUsers[userId]
                    });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
}