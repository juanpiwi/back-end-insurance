/**
 * Insurance Service
 */
class InsuranceService {
  static list () {
    const information = {
      user_id: 1,
      name: 'Juan Pablo Ferrari',
      role: 'admin',
      createdAt: new Date(),
      user: {
        firstName: 'Juan Pablo',
        lastName: 'Ferrari',
        email: 'juan@ferrari.com'
      }
    }
    return Promise.resolve(new Array(10).fill(information))
  }
}

/**
 * Expose Service
 */
module.exports = InsuranceService
