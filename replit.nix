{ pkgs }: {
  deps = [
    pkgs.unzip
    pkgs.bashInteractive
    pkgs.nodePackages.bash-language-server
    pkgs.man
    pkgs.zip
    pkgs.ffmpeg
    pkgs.imagemagick 
    pkgs.wget 
    pkgs.libuuid 
  ];
}