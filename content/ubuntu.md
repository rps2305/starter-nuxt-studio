

---

**Setting Up Linux Servers in Your Home Lab**

Welcome back! I'm Techno Tim, and today we're going to talk about the first things I do when setting up a new Linux server. Whether your servers are virtualized or bare metal, here are some essential steps.

### Choosing Your Linux Distribution
- **Ubuntu Server**: My go-to choice, but these steps apply to most distributions.

### Initial Setup Steps
1. **Update Installation**:
   - Run `sudo apt-get update`
   - Run `sudo apt-get upgrade`
   - Reboot the server if necessary.

2. **Configure Automatic Updates**:
   - Ensure `unattended-upgrades` is installed.
   - Reconfigure the package to enable automatic security updates.

3. **Create a New User and Disable Root**:
   - Add a new user: `sudo adduser [username]`
   - Add the user to the sudoers list: `sudo usermod -aG sudo [username]`
   - Disable root login: `sudo passwd -l root`

4. **Install SSH**:
   - Install OpenSSH Server: `sudo apt-get install openssh-server`
   - Set up SSH keys for secure login:
     - Generate keys: `ssh-keygen`
     - Copy keys to server: `ssh-copy-id [username]@[hostname]`
   - Disable password authentication by editing `/etc/ssh/sshd_config`.

### Network Configuration
- **Set a Static IP Address**:
  - Edit the network configuration file (e.g., `/etc/netplan/01-netcfg.yaml`).
  - Apply the changes: `sudo netplan apply`.

### Quality of Life Improvements
1. **Install Zsh and Oh My Zsh**:
   - Install Zsh: `sudo apt-get install zsh`
   - Install Oh My Zsh: `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

2. **Utilize the Entire Disk Space**:
   - Resize the filesystem if necessary using `lvextend` and `resize2fs`.

3. **Set Hostname and Timezone**:
   - Change hostname: `sudo hostnamectl set-hostname [new-hostname]`
   - Set timezone: `sudo timedatectl set-timezone [timezone]`

### Additional Configurations
1. **Configure NTP Time Server**:
   - Edit `/etc/systemd/timesyncd.conf` to set your NTP server.
   - Restart the time sync service.

2. **Install QEMU Guest Agent (for VMs)**:
   - Install the agent: `sudo apt-get install qemu-guest-agent`
   - Enable it in your VM settings and restart the VM.

3. **Set Up a Firewall**:
   - Enable and configure UFW:
     - `sudo ufw allow ssh`
     - `sudo ufw enable`

4. **Install Fail2Ban**:
   - Install Fail2Ban: `sudo apt-get install fail2ban`
   - Configure it to protect SSH by modifying the jail.local file.

### Bonus Tips
1. **Backups**:
   - Use `rsync` to back up data securely over SSH.

2. **Remote Logging and Monitoring**:
   - Set up systems like Prometheus and Fluentd for log aggregation and monitoring.

### Conclusion
These steps are essential for setting up a new Linux server. While you might automate these tasks with tools like Ansible, understanding the manual process is beneficial. If you have any additional tips or questions, let me know in the comments or join my live streams. Thanks for watching, and until next time, stream on, my friends!

---

