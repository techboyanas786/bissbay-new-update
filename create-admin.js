import { createUser } from './lib/auth-simple.js';

async function createAdminUser() {
  try {
    // Get username and password from command line arguments
    const username = process.argv[2];
    const password = process.argv[3];
    
    if (!username || !password) {
      console.log('Usage: node create-admin.js <username> <password>');
      console.log('');
      console.log('Password requirements:');
      console.log('- At least 12 characters long');
      console.log('- Contains uppercase letters');
      console.log('- Contains lowercase letters');
      console.log('- Contains numbers');
      console.log('- Contains special characters (!@#$%^&*()_+-=[]{}|;:,.<>?)');
      console.log('');
      console.log('Example: node create-admin.js myuser "MySecurePass123!"');
      process.exit(1);
    }
    
    console.log('Creating admin user...');
    const result = await createUser(username, password);
    
    console.log('✅ Admin user created successfully!');
    console.log('Username:', result.username);
    console.log('User ID:', result.id);
    console.log('');
    console.log('You can now login to the admin panel with these credentials.');
    
  } catch (error) {
    console.error('❌ Error creating admin user:');
    console.error(error.message);
    process.exit(1);
  }
}

createAdminUser();